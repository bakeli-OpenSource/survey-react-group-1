const Register = () => { 

    const [formData, setFormData] = useState({  
      name: "",
      email: "",
      password: ""
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // axios
      // .get(
      //   `http://localhost:8003/api/register?email=${formData.email}`
      // )
      // .then((res) => {
      //   if (res.formData.length > 0) {
      //     toast.error("Un compte existe déjà avec cette adresse mail");
      //   } else {
      //     axios
      //       .post("http://localhost:8003/api/register", formData)
      //       .then((res) => {
      //         console.log(res);
  
      //         toast.success("Inscription réussie");
      //         navigate("/login");
      //       })
      //       .catch((err) => {
      //         console.log(err);
      //         toast.error("Une erreur est survenue");
      //       });
      //   }
      // });


      //Vérification si l'email existe déjà
    // const emailCheckResponse = axios.get(`http://localhost:8003/api/register?email=${formData.email}`);
    // const response = axios.post("http://localhost:8003/api/register", formData);
      
    //   if (emailCheckResponse.formData.length < 0) {
    //     //L'email existe déjà
    //     console.log(response);
    //     toast.success("Inscription réussie");
    //     setFormData({ name: "", email: "", password: "" });

    //     navigate("/login");
  
        
    //   } else {
    //     //L'email est unique, l'utilisateur peut être inscrit
    //     //const response = axios.post("http://localhost:8003/api/register", formData);
    //     console.log(e);
    //     toast.error("Cet email existe déjà");
        
    //   } 
   
    //   setLoading(false);
  
      // axios.post(`http://127.0.0.1:8003/api/register?email=${formData.email}`)
      //   .then((res) => {
      //     if (res.formData.length > 0) {
      //       toast.error("Cette adresse mail existe déjà");
      //     } else {
            axios.post("http://127.0.0.1:8003/api/register", formData)
              .then((res) => {
                console.log(res);
                toast.success("Inscription réussie");
                setFormData({ name: "", email: "", password: "" });
              })
              .catch((err) => {
                console.log(err);
                toast.error("Une erreur s'est produite lors de l'inscription");
              })
              .finally(() => setLoading(false));
          //}
        //})
        
    };
    return (
      <div className="container my-3"
          style={{ backgroundColor: "", padding: "2px" }}>
            
        <Container className="content">
          <Toaster/>
          <Link to="/login">
            <div className="container row" style={{}}>
        
            <img  src={logoSmall} alt="logo" style={{
              width:'15%',
              marginLeft:'550px',
              margin:'60px auto',
            }}/>
            </div>
          </Link>
          <Row className="container-2">
            <Col md={6}>
              
              <Form className="" onSubmit={handleSubmit} style={{ 
                marginTop: "75px",
                marginLeft:'100px'
                }}>
                <Form.Group className="" >
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control controlId="formBasicName"
                    type="text" className="" name="name" value={formData.name}
                    required  onChange={handleChange}
                    style={{
                      border: "none",
                      padding: "13px",
                      width: "70%",
                      marginTop:'95px'
                    }}
                    placeholder="Enter Nom Complet"/>  <br />
                  
                  <Form.Control controlId="formBasicEmail"
                    type="email"
                    className=""
                    style={{
                      border: "none",
                      padding: "13px",
                      width: "70%",
                    }}
                    placeholder="Enter email" name="email" value={formData.email}
                    required onChange={handleChange}
                  />
                </Form.Group> <br />
  
                  <Form.Control controlId="formBasicPassword"
                    type="password"
                    style={{
                      border: "none",
                      padding: "13px",
                      width: "70%",
                    }}
                    placeholder="Password" name="password" value={formData.password}
                    required onChange={handleChange}
                  />
                <Form.Text className="text-muted">
                  <p
                    className="mt-3"
                    style={{
                      textAlign: "left",
                      color: "#000",
                    }}>
                    Vous avez déja un compte  <a href="login" className="fw-bold"
                    style={{
                      textDecoration:'none',
                      color:'#009788',
                    }}> identifiez vous </a>
                  </p>
                </Form.Text>
                <Button  type="submit" variant="" className="text-white" disabled={loading}
                  style={{
                    backgroundColor: "#009788",
                    padding: "10px",
                    width: "35%",
                    marginRight: "90px",
                  }}>
                  INSCRIRE
                </Button>
              </Form>
            </Col>
            <Col md={6}>
              <div className="head_right">
                <div className="imgContainer d-flex justify-content-between align-items-end">
                  <img
                    src={imgRegister}
                    style={{
                      width: "110%",
                      height: "430px",
                      objectFit: "cover",
                    }}
                    alt=""
                    className=""
                  />
                </div>
              </div>
            </Col>
            
          </Row>
          
        </Container>
      </div>
    );
  };
  
  export default Register;