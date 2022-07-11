import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";
import classNames from 'classnames';

interface SidebarProps{
  active: true | false;
}

export function Sidebar(props:SidebarProps){
  const { data } = useGetLessonsQuery();

  return (
    <aside className={classNames("bg-gray-700 p-6 border-l border-gray-600 lg:block lg:w-[348px] lg:relative transition-all" , {
      "hidden": !props.active,
      "absolute w-full top-0 bottom-0 z-50" : props.active,
    })}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => (
          <Lesson 
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  )
}