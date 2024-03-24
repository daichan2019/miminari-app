import { AudioPlayer } from '@/components/audio-player';
import { UserButton } from '@clerk/nextjs';

const audioFiles = [
  { name: '秋の虫', src: '/akinomushi.mp3' },
  { name: '鈴虫', src: '/suzumushi.mp3' },
  { name: 'ガビチョウ', src: '/gabicho.mp3' },
  { name: 'エンマコオロギ', src: '/enmakorogi.mp3' },
  { name: '川のせせらぎ', src: '/seseragi.mp3' },
];

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <UserButton />
        <ul className='flex-wrap flex justify-center items-center list-none'>
          {audioFiles.map((file) => (
            <li
              key={file.name}
              className='list-none m-4 flex flex-col justify-center items-center'
            >
              <AudioPlayer src={file.src} name={file.name} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
