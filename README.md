# App Status

## Setup

- install NVM
- install Node 10
- `npm install pm2 -g`
- `sudo apt install authbind -y`
- `sudo touch /etc/authbind/byport/80`
- `sudo chown ubuntu /etc/authbind/byport/80`
- `sudo chmod 755 /etc/authbind/byport/80`

## Running

- `cd /home/ubuntu/app-status`
- `npm ci`
- `pm2 kill`
- `authbind --deep pm2 start ecosystem.config.js --env production`

## Running Dev

- `parcel watch index.html`
- `npm start`
