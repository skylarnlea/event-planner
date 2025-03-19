let events = [];

exports.getAllEvents = (req, res) => {
    res.json(events);
};

exports.createEvent = (req, res) => {
    const { name, date, location } = req.body;
    const newEvent = { id: events.length + 1, name, date, location };
    events.push(newEvent);
    res.status(201).json(newEvent);
};