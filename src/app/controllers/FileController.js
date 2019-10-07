import File from '../models/File';

class FileController {
  async store(req, res) {
    if (req.file === null) {
      return res.status(400).json({ error: 'No image provided' });
    }

    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }
}

export default new FileController();
