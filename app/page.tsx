import Image from "next/image";

const hardware = [
  {
    id: 0,
    name: 'Large 2U Server',
    vendor: 'Mario Technology'
  },
  {
    id: 1,
    name: 'Edge Server',
    vendor: 'Luigi Computers'
  },
  {
    id: 2,
    name: 'Edge Server',
    vendor: 'Luigi Computers'
  }
]

export default function Home() {
  return (
      <main className="h-screen w-screen items-center justify-center">
        <div className="flex flex-col w-auto max-w-5xl mx-auto h-full items-center justify-center">
          <div className="flex flex-row space-x-4 w-full h-auto">
            <div className="flex flex-col w-2/3 h-auto space-y-4 border">
              <ul>
                {hardware.map((server, i) => (
                  <div key={i} className="flex w-full h-auto items-start justify-start">
                    <p>{server.name}</p>
                  </div>
                ))}
              </ul>
            </div>
            <div className="flex w-1/3 h-auto border">
            </div>
          </div>
        </div>
      </main>
  );
}
