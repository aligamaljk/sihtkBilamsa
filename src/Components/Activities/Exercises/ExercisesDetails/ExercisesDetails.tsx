import { ITranslation } from "../../../../types";

const ExercisesDetails = ({ t }: ITranslation) => {
  return (
    <>
      <div className='exercises-details'>
        <h1>{t.exercisesDetails}</h1>
      </div>
    </>
  );
};

export default ExercisesDetails