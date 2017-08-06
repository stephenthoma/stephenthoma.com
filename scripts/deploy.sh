COMMAND='cd /var/www/stephenthoma.com && sudo git pull && sudo npm run dev:build'
gcloud compute ssh site-portfolio -- $COMMAND
