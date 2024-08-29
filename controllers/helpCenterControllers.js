import helpCenterModels from '../models/cardModel.js';

const createCard = async (req, res) => {
    const newCard = new helpCenterModels(req.body);
    try {
        const savedCard = await newCard.save();
        res.status(200).json(savedCard);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getCards = async (req, res) => {
    try {
        const cards = await helpCenterModels.find();
        res.status(200).json(cards);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getCardByTitle = async (req, res) => {
    try {
        const { title } = req.params;
        const card = await helpCenterModels.findOne({ title });

        if (!card) {
            return res.status(404).json({ message: 'Card not found' });
        }

        res.json(card);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const search = async (req, res) => {
    try {
        const query = req.query.q ? req.query.q.trim() : '';
    
        if (query === '') {
          return res.json([]);
        }
    
        const searchResults = await helpCenterModels.find({
          $or: [
            { title: { $regex: new RegExp(query, 'i') } },  
            { description: { $regex: new RegExp(query, 'i') } }
          ]
        });
    
        res.json(searchResults);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
    
};

export { createCard , getCards , getCardByTitle , search }