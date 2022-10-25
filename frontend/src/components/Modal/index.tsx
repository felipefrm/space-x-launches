import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from "react";
import { FaSpinner, FaTimes } from 'react-icons/fa';

import { useModal } from '../../contexts/modal';
import api from '../../services/api';
import { LaunchDetails } from '../../types/LaunchDetails';

import { LabeledImage } from './LabeledImage';
import { PayloadCard } from './PayloadCard';

export function Modal() {
  const { isOpen, closeModal, data } = useModal();

  const [launch, setLaunch] = useState<LaunchDetails>({} as LaunchDetails);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isOpen) {
      loadLaunchDetails();

      async function loadLaunchDetails() {
        setIsLoading(true);
        const response = await api.get(`/launches/${data.id}`);
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
                      as="h1"
                      className="text-2xl font-medium leading-6 text-gray-900 flex justify-between border-b"
                    >
                      <span>{launch.launch?.name}</span>
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm rounded-md hover:bg-slate-100 duration-300"
                        onClick={closeModal}
                      >
                        <FaTimes size={18} />
                      </button>
                    </Dialog.Title>
                    <div className="flex flex-col gap-6 mt-4">

                      {launch.payloads && (
                        <div>
                          <h2 className="text-2xl font-bold">Payloads</h2>
                          <div className='flex flex-col gap-4'>
                            {launch.payloads.map((payload, idx) => (
                              <PayloadCard payload={payload} index={idx} key={payload.id} />
                            ))}
                          </div>
                        </div>
                      )}

                      {launch.rockets && (
                        <div>
                          <h2 className="text-2xl font-bold">Rocket</h2>
                          <div className="flex gap-4 h-[400px]">
                            <LabeledImage
                              image={{
                                src: launch.rockets[0].flickr_images[0],
                                alt: launch.rockets[0].name,
                                width: 300,
                                height: 400,
                              }}
                              labels={[
                                { title: 'Name', description: launch.rockets[0].name },
                                { title: 'Country', description: launch.rockets[0].country },
                                { title: 'Company', description: launch.rockets[0].company }
                              ]}
                            />
                            <div className="overflow-y-auto min-h-full">
                              <h3 className="text-xl font-bold mb-2">{launch.rockets[0].name}</h3>
                              <p>{launch.rockets[0].description}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {launch.launchpads && (
                        <div>
                          <h2 className="text-2xl font-bold">Launchpad</h2>
                          <div className="flex gap-4 h-[400px]">
                            <LabeledImage
                              image={{
                                src: launch.launchpads[0].images.large[0],
                                alt: launch.launchpads[0].name,
                                width: 300,
                                height: 400,
                              }}
                              labels={[
                                { title: 'Name', description: launch.launchpads[0].name },
                                { title: 'Locality', description: launch.launchpads[0].locality },
                                { title: 'Region', description: launch.launchpads[0].region },
                                { title: 'Timezone', description: launch.launchpads[0].timezone }
                              ]}
                            />
                            <div className="overflow-y-auto min-h-full">
                              <h3 className="text-xl font-bold mb-2">{launch.launchpads[0].full_name}</h3>
                              <p className='overflow-y-auto'>{launch.launchpads[0].details}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {launch.crew && (
                        <div>
                          <h2 className="text-2xl font-bold">Crew</h2>
                          <div className="flex gap-4 overflow-x-auto">
                            {launch.crew.map((crew) => (
                              <LabeledImage
                                image={{
                                  src: crew.image,
                                  alt: crew.name,
                                  width: 200,
                                  height: 300,
                                }}
                                labels={[
                                  { title: 'Name', description: crew.name },
                                  { title: 'Agency', description: crew.agency },
                                ]}
                              />
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