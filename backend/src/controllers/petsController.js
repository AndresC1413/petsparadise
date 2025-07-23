class PetsController {
    constructor(PetModel) {
        this.PetModel = PetModel;
    }

    async createPet(req, res) {
        try {
            const pet = new this.PetModel(req.body);
            await pet.save();
            res.status(201).json(pet);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getPets(req, res) {
        try {
            const pets = await this.PetModel.find();
            res.status(200).json(pets);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getPetById(req, res) {
        try {
            const pet = await this.PetModel.findById(req.params.id);
            if (!pet) {
                return res.status(404).json({ message: 'Pet not found' });
            }
            res.status(200).json(pet);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updatePet(req, res) {
        try {
            const pet = await this.PetModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!pet) {
                return res.status(404).json({ message: 'Pet not found' });
            }
            res.status(200).json(pet);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deletePet(req, res) {
        try {
            const pet = await this.PetModel.findByIdAndDelete(req.params.id);
            if (!pet) {
                return res.status(404).json({ message: 'Pet not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default PetsController;