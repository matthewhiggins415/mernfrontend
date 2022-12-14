import { Container, H2, Img } from '../styles/components/Course.styles'
import img from '../assets/eCommThumbnail.jpg'

const Course = ({id, course}) => {
  return (
    <Container to={`/coursehome/${id}`}>
      <Img src={img} />
      <H2>{course.title}</H2>
    </Container>
  )
}

export default Course