import {
    Consult
} from "../MODELS/modelsMascotas.js";

export async function listarMascotas(req,res) {
    try {
        const mascotas = await Consult.find();
        res.status(200).json(mascotas);
    } catch (error) {
        res.status(500).json({ message: "Error al listar usuarios", error });
    }
}

