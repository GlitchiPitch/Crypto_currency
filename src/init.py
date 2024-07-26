from src.http_client import CMCHTTPCLient
from src.config import settings

cmc_client = CMCHTTPCLient(
    base_url="https://pro-api.coinmarketcap.com",
    api_key=settings.CMC_API_KEY
)
