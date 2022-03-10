const errorHandler = (error, _req, res, _next) => {
        const [e] = error.details;
        const { type, message } = e;
        if (type === 'string.min') return res.status(422).json({ message });
        if (type === 'number.min') return res.status(422).json({ message });
        if (type === 'any.required') return res.status(400).json({ message });
        if (type === 'number.base') {
        return res.status(422).json({ message: 
            '"quantity" must be a number larger than or equal to 1' });
    }
        return res.status(500).json(error.message);
};

module.exports = errorHandler;