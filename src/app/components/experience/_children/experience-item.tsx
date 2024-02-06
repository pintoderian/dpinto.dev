import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger
} from "../../dialog";

export default function ExperienceItem({
  btnText,
  activities
}: {
  btnText: string;
  activities: string[];
}) {
  return (
    <Dialog>
      <DialogTrigger className="inline-flex font-medium text-orange-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-orange-700">
        {btnText}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 icon icon-tabler icon-tabler-chevron-right"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>{" "}
          <path d="M9 6l6 6l-6 6"></path>{" "}
        </svg>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <ul className="flex flex-col gap-4 text-gray-600 dark:text-gray-300">
              {activities.length >= 1 &&
                activities.map((activity, index) => {
                  return <li key={`activity-${index}`}>{activity}</li>;
                })}
            </ul>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
