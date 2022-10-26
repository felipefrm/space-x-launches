import { Dialog } from "@headlessui/react";
import { FaSpinner, FaTimes } from "react-icons/fa";
import { LaunchDetails } from "../../types/LaunchDetails";

import { LabeledImage } from "./LabeledImage";
import { PayloadCard } from "./PayloadCard";

interface ModalContentProps {
  isLoading: boolean;
  data: LaunchDetails;
  closeModal: () => void;
}

export function ModalContent({ isLoading, data, closeModal }: ModalContentProps) {
  return (
    <>
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
              <span>{data.launch?.name}</span>
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm rounded-md hover:bg-slate-100 duration-300"
                onClick={closeModal}
              >
                <FaTimes size={18} />
              </button>
            </Dialog.Title>
            <div className="flex flex-col gap-6 mt-4">

              {data.payloads && (
                <div>
                  <h2 className="text-2xl font-bold">Payloads</h2>
                  <div className='flex flex-col gap-4'>
                    {data.payloads.map((payload, idx) => (
                      <PayloadCard payload={payload} index={idx} key={payload.id} />
                    ))}
                  </div>
                </div>
              )}

              {data.rockets && (
                <div>
                  <h2 className="text-2xl font-bold">Rocket</h2>
                  <div className="flex gap-4 h-[400px]">
                    <LabeledImage
                      image={{
                        src: data.rockets[0].flickr_images[0],
                        alt: data.rockets[0].name,
                        size: "medium",
                      }}
                      labels={[
                        { title: 'Name', description: data.rockets[0].name },
                        { title: 'Country', description: data.rockets[0].country },
                        { title: 'Company', description: data.rockets[0].company }
                      ]}
                    />
                    <div className="overflow-y-auto min-h-full">
                      <h3 className="text-xl font-bold mb-2">{data.rockets[0].name}</h3>
                      <p>{data.rockets[0].description}</p>
                    </div>
                  </div>
                </div>
              )}

              {data.launchpads && (
                <div>
                  <h2 className="text-2xl font-bold">Launchpad</h2>
                  <div className="flex gap-4 h-[400px]">
                    <LabeledImage
                      image={{
                        src: data.launchpads[0].images.large[0],
                        alt: data.launchpads[0].name,
                        size: "medium",
                      }}
                      labels={[
                        { title: 'Name', description: data.launchpads[0].name },
                        { title: 'Locality', description: data.launchpads[0].locality },
                        { title: 'Region', description: data.launchpads[0].region },
                        { title: 'Timezone', description: data.launchpads[0].timezone }
                      ]}
                    />
                    <div className="overflow-y-auto min-h-full">
                      <h3 className="text-xl font-bold mb-2">{data.launchpads[0].full_name}</h3>
                      <p className='overflow-y-auto'>{data.launchpads[0].details}</p>
                    </div>
                  </div>
                </div>
              )}

              {data.crew && (
                <div>
                  <h2 className="text-2xl font-bold">Crew</h2>
                  <div className="flex gap-4 overflow-x-auto">
                    {data.crew.map((crew) => (
                      <LabeledImage
                        key={crew.id}
                        image={{
                          src: crew.image,
                          alt: crew.name,
                          size: "small",
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
    </>
  )
}