import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from "react";
import { FaSpinner, FaTimes } from 'react-icons/fa';
import { useModal } from '../../contexts/modal';
import api from '../../services/api';
import { LaunchDetails } from '../../types/LaunchDetails';
import { CardAttribute } from '../Card/CardAttribute';

export function Modal() {
  const { isOpen, closeModal, data } = useModal();

  const [launch, setLaunch] = useState<LaunchDetails>({} as LaunchDetails);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isOpen) {
      loadLaunchDetails();

      async function loadLaunchDetails() {
        setIsLoading(true);
        const response = await api.get(`/launches/${data}`);
        setLaunch(response.data);
        setIsLoading(false);
      }
    }
  }, [isOpen])

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-7xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              {
                isLoading ? (
                  <div className='flex justify-center'>
                    <FaSpinner size={24} className="animate-spin" />
                  </div>
                ) : (
                  <>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 flex justify-between"
                    >
                      <span>{launch.launch?.name}</span>
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm rounded-md hover:bg-slate-100 duration-300"
                        onClick={closeModal}
                      >
                        <FaTimes />
                      </button>
                    </Dialog.Title>
                    <div className="mt-2 border-t">

                      {launch.payloads && (
                        <div>
                          <h2 className="text-2xl font-bold">Payloads</h2>
                          <div className='flex flex-col gap-4'>
                            {
                              launch.payloads.map((payload, idx) => (
                                <div key={payload.name} className='bg-gray-600 p-6 rounded-md'>
                                  <h2 className="text-white text-2xl font-bold mb-4">Payload #{idx}</h2>
                                  <div className="flex gap-8 flex-wrap">
                                    <CardAttribute title='Name' description={payload.name} />
                                    <CardAttribute title='Type' description={payload.type} />
                                    <CardAttribute title='Orbit' description={payload.orbit} />
                                    <CardAttribute title='Nationality' description={payload.nationalities[0]} />
                                    <CardAttribute title='Manufacturer' description={payload.manufacturers[0]} />
                                    <CardAttribute title='Customer' description={payload.customers[0]} />
                                  </div>
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      )}

                      {launch.rockets && (
                        <div>
                          <h2 className="text-2xl font-bold">Rocket</h2>
                          <div className="flex gap-4">
                            <div className='relative'>
                              <img
                                className="rounded-md min-w-[400px]"
                                src={launch.rockets[0].flickr_images[0]}
                                alt={launch.rockets[0].name}
                                referrerPolicy="no-referrer"
                              />
                              <div className='absolute bottom-2 left-2 bg-black bg-opacity-40 backdrop-blur-sm p-2 rounded-lg'>
                                <CardAttribute title='Name' description={launch.rockets[0].name} />
                                <CardAttribute title='Country' description={launch.rockets[0].country} />
                                <CardAttribute title='Company' description={launch.rockets[0].company} />
                              </div>
                            </div>
                            <p>{launch.rockets[0].description}</p>
                          </div>
                        </div>
                      )}

                      {launch.launchpads && (
                        <div>
                          <h2 className="text-2xl font-bold">Launchpad</h2>
                          <div className="flex gap-4">
                            <div className='relative'>
                              <img
                                className="rounded-md min-w-[400px]"
                                src={launch.launchpads[0].images.large[0]}
                                alt={launch.launchpads[0].name}
                                referrerPolicy="no-referrer"
                              />
                              <div className='absolute bottom-2 left-2 bg-black bg-opacity-40 backdrop-blur-sm p-2 rounded-lg'>
                                <CardAttribute title='Name' description={launch.launchpads[0].name} />
                                <CardAttribute title='Locality' description={launch.launchpads[0].locality} />
                                <CardAttribute title='Region' description={launch.launchpads[0].region} />
                                <CardAttribute title='Timezone' description={launch.launchpads[0].timezone} />
                              </div>
                            </div>
                            <div>
                              <h3>{launch.launchpads[0].full_name}</h3>
                              <p>{launch.launchpads[0].details}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {launch.crew && (
                        <div>
                          <h2 className="text-2xl font-bold">Crew</h2>
                          <div className="flex gap-4">
                            {launch.crew.map((crew) => (
                              <div className='relative'>
                                <img
                                  className="rounded-md min-w-[100px]"
                                  src={crew.image}
                                  alt={crew.name}
                                  referrerPolicy="no-referrer"
                                />
                                <div className='absolute bottom-2 left-2 bg-black bg-opacity-40 backdrop-blur-sm p-2 rounded-lg'>
                                  <CardAttribute title='Name' description={crew.name} />
                                  <CardAttribute title='Agency' description={crew.agency} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )
              }
            </div>
          </Transition.Child>
        </div>
      </Dialog >
    </Transition >
  )
}