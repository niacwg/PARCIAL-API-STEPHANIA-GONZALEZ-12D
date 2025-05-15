import { downloadCSV } from '../services/externalService.js';

export const handleDownloadCSV = async (req, res) => {
  try {
    const message = await downloadCSV();
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};