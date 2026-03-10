require('dotenv').config({ path: '.env.local' });
const { google } = require('googleapis');

const privateKey = process.env.GOOGLE_PRIVATE_KEY;
if (!privateKey) { console.error('No GOOGLE_PRIVATE_KEY found'); process.exit(1); }

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: privateKey.replace(/\\n/g, '\n'),
    project_id: process.env.GOOGLE_PROJECT_ID
  },
  scopes: ['https://www.googleapis.com/auth/calendar.readonly']
});

async function test() {
  const client = await auth.getClient();
  const calendar = google.calendar({ version: 'v3', auth: client });
  
  const res = await calendar.events.list({
    calendarId: 'vladybookings@gmail.com',
    timeMin: new Date().toISOString(),
    maxResults: 5,
    singleEvents: true,
    orderBy: 'startTime'
  });
  
  const events = res.data.items || [];
  console.log('SUCCESS! Connected to vladybookings@gmail.com');
  console.log('Upcoming events:', events.length);
  events.forEach(e => {
    console.log(' -', e.summary, '|', e.start?.dateTime || e.start?.date);
  });
}

test().catch(e => console.error('ERROR:', e.message));
