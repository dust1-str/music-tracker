import '../../App.css'

export default function Home() {
  async function validateData(formData: FormData) {
    'use server'
    const API_KEY = formData.get('api-key')
    const USER = formData.get('user')
    if (API_KEY && USER) {
      const URL = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USER}&api_key=${API_KEY}&format=json&limit=1`
      console.log(URL)
      await fetch(URL)
        .then(response => response.json())
        .then(data => console.log(data))
    } else {
      console.error("Key is null")
    }
  }


  return (
    <>
      <div className="flex h-screen w-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h3 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Hi! Thank you for using my music tracker. Before you get started, please type your lastFM key below</h3>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={validateData} method="POST">
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="api-key" className="block text-sm/6 font-medium text-gray-900">Your lastFM key</label>
              </div>
              <div className="mt-2">
                <input type="text" name="api-key" id="api-key" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="user" className="block text-sm/6 font-medium text-gray-900">Your lastFM user</label>
              </div>
              <div className="mt-2">
                <input type="text" name="user" id="user" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
              </div>
            </div>
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
