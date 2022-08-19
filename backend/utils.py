from square.client import Client
import uuid

def make_idemp_key():
    return str(uuid.uuid4())


def create_checkout_link(access_token, location_id, ticket_name, quantity, unit_price, redirect_url):
    client = Client(
        access_token=access_token,
        environment='sandbox')
    result = client.checkout.create_checkout(
    location_id = location_id,
    body = {
        "idempotency_key": make_idemp_key(),
        "order": {
        "order": {
            "location_id": location_id,
            "line_items": [
            {
                "name": ticket_name,
                "quantity": quantity,
                "base_price_money": {
                "amount": unit_price,
                "currency": "USD"
                }
            }
            ]
        },
        "idempotency_key": make_idemp_key()
        },
        "redirect_url": redirect_url
    }
    )
    return result