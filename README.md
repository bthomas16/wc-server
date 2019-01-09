# wc-server

1. Build wc-client application
2. Bring /dist folder into server root directory
3. Test on local environment (development) // './run-env.sh "env name"'
4. Run unit tests // 'npm run test'
5. Deploy to stage // commit to staging-deploy 
6. Run unit tests // 'heroku run npm run test'
7. Push to production


# Setting Heroku ENV Variables

1. heroku config:set ACCESS_KEY_ID='AKIAI5BWXBSDTVNBBYNA' SECRET_ACCESS_KEY='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' BUCKET='watchcollectionbucket' REGION='us-east-1' SECRET='secretWord!' GoogleAuth_user='watchsoc@gmail.com' GoogleAuth_pass='watchesAreLife69'

### SAMPLE .env file will contain the following:

GoogleAuth_user = ''
GoogleAuth_pass = ''

ACCESS_KEY_ID = '',
SECRET_ACCESS_KEY = '',
BUCKET = '',
REGION = ''
