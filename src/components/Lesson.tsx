import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps){
  const { slug } = useParams<{slug: string}>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'm", {
    locale: ptBR
  })

  const isActiveLesson = slug === props.slug;


  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div className={classNames("border border-gray-500 p-4 rounded mt-2 group-hover:border-green-500 transition-colors", {
        "bg-green-500": isActiveLesson
      })}>
        <header className="flex justify-between items-center">
          {isLessonAvailable ? (
            <span className={classNames("text-sm font-medium flex items-center gap-2", {
              "text-blue-500": !isActiveLesson,
              "text-white" : isActiveLesson
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) :
          (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )
          }
         
          <span className={classNames("border rounded py-[0.125rem] px-2 text-white text-xs font-bold", {
            "border-green-300" : !isActiveLesson,
            "border-white" : isActiveLesson
          })}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className={classNames("mt-5 block", {
          "text-white": isActiveLesson,
          "text-gray-200" : !isActiveLesson
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}