// app/api/contact/route.js
import { connectToDatabase } from '../../../lib/mongodb';
import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: String,
  mail: String,
  message: String,
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export async function POST(req) {
  await connectToDatabase();
  
  const data = await req.json();

  try {
    const newContact = await Contact.create(data);
    return new Response(JSON.stringify({ success: true, data: newContact }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
