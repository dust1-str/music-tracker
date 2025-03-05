import { useLocation } from 'react-router-dom'
import('../../App.css')

export default function ConfirmAccount() {
    const location = useLocation()
    const tracks = location.state?.tracks
    const recentTrack = tracks.recenttracks.track[0]
    const artist = recentTrack.artist['#text']
    const song = recentTrack.name
    const image = recentTrack.image[2]['#text']
    
    return (
        <>
            <div className='flex items-center justify-center min-h-screen bg-gray-50'>
                <div className="p-4 items-center justify-center w-[680px] rounded-xl group sm:flex space-x-6 bg-white shadow-xl hover:rounded-2xl">
                    <img  className="mx-auto size-auto rounded-lg"  alt="art cover" loading="lazy" src={image} />
                    <div className="sm:w-8/12 pl-0 p-5">
                        <div className="space-y-2">
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-cyan-900 text-justify">
                                    {song}
                                </h4>
                                <h4 className="text-lg font-semibold text-cyan-900 text-justify">
                                    {artist}
                                </h4>
                                <p><strong>Is this the last song you heard, or are you listening to it right now?</strong></p>
                                <button className="mr-5 bg-green-800 px-10 py-3 text-white rounded-2xl hover:bg-green-900">Yes</button>
                                <button className="mr-5 bg-red-600 px-10 py-3 text-white rounded-2xl hover:bg-red-700">No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}