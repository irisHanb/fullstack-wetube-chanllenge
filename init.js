import app from './app';

const PORT = 4000;
const handleConnect = (req, res) => {
  console.log(`connected localhost:${PORT}`);
}

app.listen(PORT, handleConnect);