class boosterController {
  async getMyCollection(req, res) {
    const card = req.message;
    return res.status(200).send(card);
  }

  // app.post (/users)
  async addCollection(req, res) {
    try {
      const body = req.body;
      const user = await prisma.user.create({
        data: {
          collection: body.collection,
        },
      });
      return res.status(201).send(user);
    } catch (e) {
      return res.status(500).send({
        message: e.message,
      });
    }
  }
}

module.exports = new boosterController();
