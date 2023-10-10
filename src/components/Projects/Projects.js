import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chhattisgarh Forest Department Web App"
              description="The software system boasts a range of critical features to streamline organizational processes. Firstly, it employs an Approval Flow feature, mandating that submitted data undergoes scrutiny by the highest echelons of the organizational hierarchy before being deemed valid and stored in the database. Following approval, the data is transformed into a structured row format, facilitating the generation of comprehensive business analysis reports. The system also leverages Hierarchy-Based Login, ensuring that user authentication is in line with the organizational structure. This approach employs JWT tokens to filter content, thereby promoting transparency by granting users access only to information pertinent to their department. Furthermore, the system excels in Error Handling, adeptly managing and communicating various exceptional errors to users without disrupting the flow of operations. Finally, it's worth noting that Code Refactoring and optimization are undertaken, particularly for the resource-intensive process of generating department-specific reports, to ensure seamless and efficient system performance."
              demoLink="https://drive.google.com/file/d/1ZhWZiNoE9CvF5tDo5kthJzwto5bKf7Tk/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="vLiveEvent Service"
              description="Implemented a microservices architecture software as vLiveEvents Service
              ,this service —manages the 1:1 Session and webinars in between Student and
              instructor. Zoom and Calendly are —integrated in this service."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="OTT SAAS Platform-Mobiotics"
              description="The Product provides the service to the client with content to host a OTT platform but doesn’t have IT team. Web APP ,Android APP,smart TV app will be provided to handle the content hosting. To manage the business CRM and to manage CMS is provided.
              Since it’s micro-service system ,all the services are  powered by independent system which are highly scalable. SMS is one of the independent system which manage subscriber subscription for the respective provider.
                        Teach stack: Vue js, NodeJS ,AWS lambda."
              demoLink="https://noorplay.com/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
