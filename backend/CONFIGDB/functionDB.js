import Consult from "../MODELS/modelsMascotas.js";

export async function consultMascotas() {
  try {
      const resultados = await Consult.find(); // ← esto trae todo
      console.log('📋 Documentos en la colección:');
      console.log(resultados);
    } catch (error) {
      console.error('❌ Error al hacer el SELECT:', error);
    } finally {
      mongoose.connection.close(); // cerrar la conexión
    }
}
