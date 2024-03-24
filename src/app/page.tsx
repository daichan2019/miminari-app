import { UserButton } from '@clerk/nextjs'

const audioFiles = [
  { name: '秋の虫', src: '/akinomushi.mp3' },
  { name: '鈴虫', src: '/suzumushi.mp3' },
  { name: 'エンマコオロギ', src: '/enmakorogi.mp3' },
  { name: 'ガビチョウ', src: '/gabicho.mp3' },
  { name: '川のせせらぎ', src: '/seseragi.mp3' },
]

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <UserButton />
        <ul className='flex flex-wrap justify-center items-center'>
          {audioFiles.map(file => (
            <li
              key={file.name}
              className='m-4 flex flex-col justify-center items-center'
            >
              <div>{file.name}</div>
              <audio controls loop className='block'>
                <source src={file.src} type='audio/mpeg' />
                <track
                  kind='captions'
                  src='/path/to/captions.vtt'
                  label='Captions'
                />
              </audio>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
