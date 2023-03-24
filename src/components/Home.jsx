import React from 'react'

const Home = () => {
    return (
        <div className={`flex flex-col xl:flex-row md:items-center bg-white md:bg-[url('bgs.jpg')] bg-no-repeat bg-center bg-cover mt-24 h-[46rem]`}>
            <div className='mx-auto mt-1 md:mt-20 hidden md:flex md:flex-col'>
                <div className='flex'>
                    <div className='flex items-center bg-blue-900 text-white px-3 py-1 w-[18rem]'>
                        <img src="https://www.irctc.co.in/nget/assets/images/icons/pnr.png" alt="" class="" />
                        <h1 class="mx-auto "><a href="#" class="text-xs font-bold">PNR STATUS</a></h1>
                    </div>
                    <div className='flex items-center bg-blue-900 text-white px-3 py-1 mx-4 w-[20rem]'>
                        <img src="https://www.irctc.co.in/nget/assets/images/icons/chart.png" alt="" class="" />
                        <h1 class="mx-auto"><a href="#" class="text-xs font-bold">CHARTS/VACANCY</a></h1>
                    </div>
                </div>
                {/* form partion */}

                <div className='bg-white w-[39rem] h-[29rem] flex flex-col p-3'>
                    {/* Heading Part */}
                    <div className='  flex justify-between'>
                        <img src="https://www.irctc.co.in/nget/assets/images/logo_top_eng.jpg" alt="" />
                        <h1 class="text-xl text-blue-900 font-bold mt-2">BOOK TICKET</h1>
                        <img src="https://www.irctc.co.in/nget/assets/images/G20_Logo.png" alt="" class="mt-2" />
                    </div>
                    {/* Main form */}

                    <form action="#" className='px-4 py-5'>
                        <div className='flex justify-between'>
                            <div className='flex items-center border border-solid rounded border-slate-600   text-lg focus:outline focus:border-[2px] focus:border-solid focus:outline-[2px] '>
                                <i class="fa fa-location-arrow text-blue-900 px-2 ">
                                </i>
                                <input type="text"
                                    class=" h-12 w-72 outline-none text-blue-900"
                                    placeholder="From" />
                            </div>
                            <div className='flex items-center border border-solid border-slate-700 rounded hover:border-blue-900 '>
                                <input type="date"
                                    class="h-12 w-48 outline-none mr-7  text-blue-900 pr-3 pl-3"
                                    value="05/03/2023" />
                            </div>
                        </div>
                        {/* reverse */}
                        <div class=" ml-32 my-2 ">
                            <a href="#"
                                class="bg-blue-50 border border-solid border-bg-blue-50 p-1 rounded-full hover:border-blue-900 focus:border-bg-blue-900"><i
                                    class="fa fa-exchange  text-[15px] "></i></a>
                        </div>
                        {/*  */}
                        <div class="flex justify-between">
                            <div class="flex items-center  border border-solid rounded border-slate-700 hover:border-blue-700">
                                <i class="fa fa-map-marker text-blue-900   px-2 ">
                                </i>
                                <input type="text"
                                    class=" h-12 w-72 outline-none text-blue-900 text-lg"
                                    placeholder="To" />

                            </div>
                            <div class="flex items-center border border-solid border-slate-700 rounded hover:border-blue-900 ">
                                <i class="fa fa-briefcase  px-2 text-blue-900"></i>

                                <select
                                    class=" h-12 w-48 bg-white outline-none text-blue-900"
                                    placeholder="From">
                                    <option>All Classes</option>
                                    <option >Anubhuti Class (EA)</option>
                                    <option >AC First Class (1A)</option>
                                    <option>Vistadome AC (EV)</option>
                                    <option>Exec. Chair Car (EC)</option>
                                    <option>AC 2 Teir (3A)</option>
                                    <option>First Class (FC)</option>
                                    <option>AC 3 Teir (3A)</option>
                                    <option>Ac 3 Economy (3E)</option>
                                    <option>Vistadome Chair Car (VC)</option>
                                    <option>AC Chair car (CC)</option>
                                    <option>Sleeper (SL)</option>
                                    <option>Vistadome Non AC (VS)</option>
                                    <option>Second Sitting</option>
                                </select>

                            </div>
                        </div>

                        <div class="flex justify-between mt-5">
                            <div class="flex items-center border border-solid border-slate-700 rounded hover:border-blue-900 ">
                                <i class="fa fa-th-large text-blue-900 px-2" aria-hidden="true">
                                </i>
                                <select type="text"
                                    class=" h-12 w-72 bg-white outline-none text-blue-900"
                                    placeholder="From">
                                    <option value="General">General</option>
                                    <option value="Ladies">LADIES</option>
                                    <option value="Lower Berth/SR.CITIZEN ">LOWER BERTH/SR.CITIZEN</option>
                                    <option value="PERSON WITH DISABILITY">PERSON WITH DISABLITY</option>
                                    <option value="TATKAL">TATKAL</option>
                                    <option value="PREMINUM TATKAL">PREMIUM TATKAL</option>
                                </select>
                            </div>
                        </div>

                        <div class="flex mt-5 mr-3 ">
                            <div class="mr-3">
                                <input type="checkbox" class="h-4" name="" id="" />
                                <span>Person with disability Concession</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span>Flexible with Date</span>
                            </div>
                        </div>
                        <div class="flex mt-1 mr-3 ">
                            <div class="mr-3">
                                <input type="checkbox" class="h-4" name="" id="" />
                                <span>Train with Available Berth</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span>Railway Pass Concession</span>
                            </div>
                        </div>

                        <div class="mt-5">
                            <button
                                class="bg-orange-600 text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-orange-700 duration-700">Search</button>
                        </div>
                    </form>
                </div>
                <div class=" w-[39rem] bg-white mt-1 p-3 h-24">
                    <p class="text-xs font-bold"><span class="text-red-600">New</span> <span class="text-blue-700">IRCTC launches
                        ticket booking on ASK DISHA 2.0 </span> <a href="#"
                            class="bg-green-500 rounded-lg text-white font-medium px-3 py-2 hover:text-blue-800 hover:underline">Try
                            booking in Ask DISHA 2.0</a> </p>
                    <p class="text-xs font-bold text-red-600 mt-4">
                        Tickets booked through unauthorised agents or scripting can be released without refund.
                    </p>
                    <p class="text-xs font-bold text-red-600 mt-4">
                        Please input correct mobile number of passenger for getting timely alerts on booked journey.
                    </p>
                </div>
            </div>
            <div class="w-[39rem] xl:flex flex-col justify-center items-center hidden ">
                <h1 class="text-center text-5xl font-semibold text-white">Indian Railways</h1>
                <div class="flex justify-center items-center text-white mt-2">
                    <h1 class="text-xl mr-3 border-r border-r-solid border-r-white px-2">Safety</h1>
                    <h1 class="text-xl mr-3 border-r border-r-solid border-r-white px-2">Security</h1>
                    <h1 class="text-xl mr-3 border-r border-r-solid border-r-white px-2">Punctuality</h1>
                </div>
            </div>
            {/* Mobile View */}
            <div className=' block md:hidden bg-blue-900 h-16 top-14 w-full mt-[-36px]'>
            </div>
            <div className=' block md:hidden bg-white mt-[-62px] rounded-t-3xl px-4 pt-6'>
                <form action="#" className='flex flex-col mb-5 '>
                    <div className='flex items-center border hover:outline-1 hover:outline-blue-900 border-solid border-slate-700 rounded hover:border-blue-900'>
                        <i class="fa fa-location-arrow text-blue-900   px-2 ">
                        </i>
                        <input type="text"
                            class=" h-12 w-[91vw] outline-none   text-blue-900  "
                            placeholder="From" />
                    </div>
                    <div class="mt-2 mx-auto mb-2 ">
                        <a href="#"
                            class="bg-blue-50 border border-solid border-bg-blue-50 p-1 rounded-full hover:border-blue-900 focus:border-bg-blue-900"><i
                                class="fa fa-exchange  text-[15px] "></i></a>
                    </div>
                    <div className='flex items-center border hover:outline-1 hover:outline-blue-900 border-solid border-slate-700 rounded hover:border-blue-900'>
                        <i class="fa fa-map-marker text-blue-900   px-2 ">
                        </i>
                        <input type="text"
                            class=" h-12 w-[91vw] outline-none   text-blue-900  "
                            placeholder="To" />
                    </div>
                    <div className=' mt-4 flex items-center border hover:outline-1 hover:outline-blue-900 border-solid border-slate-700 rounded hover:border-blue-900'>
                        <input type="date"
                            class="h-12 w-[91vw] outline-none   text-blue-900"
                            value="05/03/2023" />
                    </div>
                    <div className='flex items-center border hover:outline-1 hover:outline-blue-900 border-solid border-slate-700 rounded hover:border-blue-900 mt-4'>
                        <i class="fa fa-briefcase  px-2 text-blue-900"></i>
                        <select type="text"
                            class=" h-12 w-[91vw] outline-none   text-blue-900 bg-white"
                            placeholder="From">
                            <option>All Classes</option>
                            <option>Anubhuti Class (EA)</option>
                            <option>AC First Class (1A)</option>
                            <option>Vistadome AC (EV)</option>
                            <option>Exec. Chair Car (EC)</option>
                            <option>AC 2 Teir (3A)</option>
                            <option>First Class (FC)</option>
                            <option>AC 3 Teir (3A)</option>
                            <option>Ac 3 Economy (3E)</option>
                            <option>Vistadome Chair Car (VC)</option>
                            <option>AC Chair car (CC)</option>
                            <option>Sleeper (SL)</option>
                            <option>Vistadome Non AC (VS)</option>
                            <option>Second Sitting</option>
                        </select>

                    </div>
                    <div className='flex items-center border hover:outline-1 hover:outline-blue-900 border-solid border-slate-700 rounded hover:border-blue-900 mt-4'>
                        <i class="fa fa-th-large text-blue-900  px-2" aria-hidden="true">
                        </i>
                        <select type="text"
                            class=" h-12 w-[91vw] outline-none   text-blue-900 bg-white"
                            placeholder="From">
                            <option value="General">General</option>
                            <option value="Ladies">LADIES</option>
                            <option value="Lower Berth/SR.CITIZEN ">LOWER BERTH/SR.CITIZEN</option>
                            <option value="PERSON WITH DISABILITY">PERSON WITH DISABLITY</option>
                            <option value="TATKAL">TATKAL</option>
                            <option value="PREMINUM TATKAL">PREMIUM TATKAL</option>
                        </select>
                    </div>
                    <div>
                        <div class="mr-3">
                            <input type="checkbox" class="h-4 mr-1" name="" id="" />
                            <span>Person with disability Concession</span>
                        </div>
                        <div>
                            <input type="checkbox" className='mr-1' />
                            <span>Flexible with Date</span>
                        </div>
                        <div class="mr-3">
                            <input type="checkbox" class="h-4 mr-1" name="" id="" />
                            <span>Train with Available Berth</span>
                        </div>
                        <div>
                            <input type="checkbox" className='mr-1' />
                            <span>Railway Pass Concession</span>
                        </div>
                    </div>
                    <div class="mt-5">
                        <button
                            class="bg-orange-600 w-[91vw] text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-orange-700 duration-700">Search</button>
                    </div>

                </form>

                <div className='flex mb-4'>
                    <div className='flex items-center bg-blue-900 text-white px-3 py-1 w-[18rem]'>
                        <img src="https://www.irctc.co.in/nget/assets/images/icons/pnr.png" alt="" class="" />
                        <h1 class="mx-auto "><a href="#" class="text-xs font-bold">PNR STATUS</a></h1>
                    </div>
                    <div className='flex items-center bg-blue-900 text-white px-3 py-1 mx-4 w-[20rem]'>
                        <img src="https://www.irctc.co.in/nget/assets/images/icons/chart.png" alt="" class="" />
                        <h1 class="mx-auto"><a href="#" class="text-xs font-bold">CHARTS/VACANCY</a></h1>
                    </div>
                </div>

                <div class=" w-[91vw] bg-white mt-1 p-3 h-40 shadow-2xl ">
                    <p class="text-xs font-bold">
                        <div className='mb-3'>
                            <span class="text-red-600">New</span>
                            <span class="text-blue-700">IRCTC launches
                                ticket booking on ASK DISHA 2.0  </span>
                        </div>

                        <div>

                            <a href="#"
                                class="bg-green-500 rounded-lg text-white font-medium my-3 px-3 py-2 hover:text-blue-800 hover:underline">Try
                                booking in Ask DISHA 2.0</a>
                        </div>
                    </p>
                    <p class="text-xs font-bold text-red-600 mt-4">
                        Tickets booked through unauthorised agents or scripting can be released without refund.
                    </p>
                    <p class="text-xs font-bold text-red-600 mt-4">
                        Please input correct mobile number of passenger for getting timely alerts on booked journey.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Home