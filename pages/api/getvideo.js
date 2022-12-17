export async function GetVideo() {
    const response = await fetch(`https://rasmlink.ir/api-v1/hls_files`,{
        headers : {
          "Authorization": "010486ba-0e8a-4382-a47f-d888baac5b5c"
        }
      });
    const result = await response.json();
    return result;
}

export default async function handler(req, res) {
    const jsonData = await GetVideo()
    res.status(200).json(jsonData)
}