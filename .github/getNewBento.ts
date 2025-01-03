const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=John&g=Lawani-EJ&x=elyon_codes&l=lawani-elyon-john&i=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa9%2Fe3%2Fe9%2Fa9e3e902562877add6cd109ac0c72765.gif&p=https%3A%2F%2Fportfolio-website-beryl-kappa.vercel.app%2F&z=e503a";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
