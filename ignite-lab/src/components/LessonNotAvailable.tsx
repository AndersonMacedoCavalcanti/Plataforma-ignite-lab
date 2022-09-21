import {HourglassHigh} from "phosphor-react";

export function LessonNotAvailable() {
    return (
        <div className="  flex  items-center h-full max-h-[45rem] content-center justify-center">
            <div className="flex flex-col items-center">
                <strong className="text-[3rem] mb-5 text-[2.5rem]">Essa aula não esta disponível</strong>
                <p className="mb-5">Você pode rever as aulas anteriores enquanto aguarda a estreia dessa aula</p>
                <HourglassHigh size={60} color="#00875F"/>
            </div>
        </div>
    )
}