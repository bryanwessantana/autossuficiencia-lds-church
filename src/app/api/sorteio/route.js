import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

console.log("DEBUG - Tentando carregar URI:", process.env.MONGODB_URI ? "Encontrada" : "NÃO ENCONTRADA");
const uri = process.env.MONGODB_URI;
if (uri) {
  const maskedUri = uri.replace(/:([^@]+)@/, ":******@"); 
  console.log("URI Carregada (Senha Oculta):", maskedUri);
}

let client;
let clientPromise;

if (!uri) {
  throw new Error('Por favor, adicione a MONGODB_URI ao seu arquivo .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

async function getDb() {
  const connectedClient = await clientPromise;
  return connectedClient.db('feira_portao');
}

export async function POST(request) {
  try {
    const { nome, telefone, numero } = await request.json();
    const db = await getDb();
    
    const result = await db.collection('participantes').insertOne({
      nome,
      telefone,
      numero,
      sorteado: false,
      data: new Date()
    });

    return NextResponse.json({ message: 'Sucesso', id: result.insertedId }, { status: 201 });
  } catch (e) {
    console.error("Erro no POST:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const db = await getDb();
    const participantes = await db.collection('participantes')
      .find({ sorteado: false })
      .toArray();
    return NextResponse.json(participantes);
  } catch (e) {
    console.error("Erro no GET:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    const { id } = await request.json();
    const db = await getDb();
    
    if (!id) {
      return NextResponse.json({ error: 'ID não fornecido' }, { status: 400 });
    }

    const result = await db.collection('participantes').updateOne(
      { _id: new ObjectId(id) },
      { $set: { sorteado: true } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Participante não encontrado' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Atualizado com sucesso' });
  } catch (e) {
    console.error("Erro no PATCH:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}