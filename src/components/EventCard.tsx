import { MapPin } from "phosphor-react"

type EventCardProps = {
    title: string
    description: string
    location: string
    backgroundImage: string
}

export function EventCard(props: EventCardProps) {
    return (
        <button type="button" className="text-left w-full rounded-lg bg-transparent border flex flex-col gap-4 hover:scale-[104%] transition-all duration-300 hover:shadow-xl">
            <img
                src={props.backgroundImage}
                alt="Event background image"
                className="w-full h-48 rounded-t-lg object-cover"
            />

            <div className="flex flex-col gap-4 p-4">

                <span className="text-black-500 font-bold text-xl">{props.title}</span>
                <span className="text-gray-500 ">{props.description}</span>

                <div className="flex items-center gap-2">
                    <MapPin size={24} className="text-red-400" />
                    <span className="text-gray-500 ">{props.location}</span>
                </div>

            </div>
        </button>
    );
};