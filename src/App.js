import speakers from "./speakers";
import transcripts from "./transcripts";

export default function App() {
  for (const transcript of transcripts) {
    const speakerNames = transcript.speakerIds.map(findSpeakerName).join(', ');
    console.log(`${speakerNames}:`, transcript.text);
  }
  return <div>Scribe Search</div>;
}

function findSpeakerName(speakerId) {
  const speaker = speakers.find((speaker) => speaker.id === speakerId);
  return speaker?.name ?? 'Unknown Speaker';
}
