let rsvps = [];

exports.submitRSVP = (req, res) => {
    const { eventId } = req.params;
    const { name, email } = req.body;

    const newRSVP = { eventId, name, email };
    rsvps.push(newRSVP);

    res.status(201).json({ message: 'RSVP submitted successfully', newRSVP });
};