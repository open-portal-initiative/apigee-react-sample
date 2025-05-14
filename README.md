## Apigee React Next.js Sample Portal

### Deployment to Cloud Run

```sh
PROJECT_ID=YOUR_PROJECT_ID
REGION=YOUR_REGION
gcloud run deploy apigee-react-portal --source . --project $PROJECT_ID --region $REGION --port 3000 --allow-unauthenticated
```