import { Card, Image } from "antd"
import { ITranslation } from "../../../types"
import img from '../../../assets/pexels-anush-gorak-1229356.jpg';
import { useNavigate } from "react-router";
const Exercises : React.FC <ITranslation> = ({t}) => {
  const navigator = useNavigate();
  return (
    <>
      <div className='exercises'>
        <div className='title'> Exercises </div>
        <div className='content'>
          <div className='cards'>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                className='card'
                key={item}
                hoverable
                onClick={() => navigator(`/activities/exercises/${item}`)}
              >
                <div className='img'>
                  <Image
                    src={img}
                    preview={false}
                    alt='image'
                    className='img'
                    // width={200}
                  />
                </div>
                <div className='info'>
                  <div className='title-info'>Short title</div>
                  <div className='desc'>
                    Fitness exercise is a form of exercise that is
                    planned, structured and organized by fitness
                    professionals.
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Exercises