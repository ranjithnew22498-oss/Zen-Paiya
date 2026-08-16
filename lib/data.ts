import {
  Cpu,
  Brain,
  Users,
  Globe,
  ShieldCheck,
  Zap,
  Layers,
  Network,
  Microscope,
  CircuitBoard,
  Bot,
  Cloud,
  Database,
  Lock,
  GitBranch,
  Workflow,
  Search,
  FileCheck,
  Handshake,
  Target,
  Clock,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  {
    label: 'Expertise',
    children: [
      { label: 'Semiconductor Expertise', href: '/semiconductor-expertise', description: 'From chip design to silicon manufacturing' },
      { label: 'AI Expertise', href: '/ai-expertise', description: 'From Generative AI to autonomous systems' },
    ],
  },
  { label: 'Employers', href: '/employers' },
  { label: 'Candidates', href: '/candidates' },
  { label: 'Contact', href: '/contact' },
];

export const capabilities = [
  { title: 'Semiconductor Recruitment Specialists', icon: Cpu },
  { title: 'AI & Deep Technology Talent', icon: Brain },
  { title: 'Permanent, Contract & Executive Hiring', icon: Users },
  { title: 'Global Talent Solutions', icon: Globe },
  { title: 'Quality-Driven Recruitment', icon: ShieldCheck },
  { title: 'Fast & Efficient Hiring', icon: Zap },
];

export type Service = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    number: '01',
    title: 'Permanent Hiring',
    description:
      'Secure long-term engineering talent through our specialized permanent placement services, tailored for Semiconductor, AI, and Deep Technology organizations.',
    icon: Users,
  },
  {
    number: '02',
    title: 'Contract Staffing',
    description:
      'Access highly skilled engineering professionals on a contract basis, providing flexibility to scale your workforce for critical projects and deadlines.',
    icon: Clock,
  },
  {
    number: '03',
    title: 'Contract-to-Hire',
    description:
      'Evaluate engineering talent on contract before making a permanent commitment, reducing hiring risk while ensuring long-term fit.',
    icon: GitBranch,
  },
  {
    number: '04',
    title: 'Executive Search',
    description:
      'Identify and recruit senior engineering leaders, technical directors, and executives who drive innovation and organizational growth.',
    icon: Search,
  },
  {
    number: '05',
    title: 'Recruitment Process Outsourcing (RPO)',
    description:
      'Outsource your entire recruitment function to ZenPiya for a scalable, fully managed hiring process tailored to your technology needs.',
    icon: Workflow,
  },
  {
    number: '06',
    title: 'Project-Based Hiring',
    description:
      'Build specialized engineering teams for specific projects, from chip tape-out to AI model deployment, with targeted talent acquisition.',
    icon: Layers,
  },
  {
    number: '07',
    title: 'Global Talent Solutions',
    description:
      'Leverage our international network to source engineering talent across regions, enabling global delivery and diverse team building.',
    icon: Globe,
  },
  {
    number: '08',
    title: 'Workforce Consulting',
    description:
      'Optimize your engineering workforce strategy with our consulting services, covering talent planning, market insights, and organizational design.',
    icon: Network,
  },
];

export const whyZenpiya = [
  {
    title: 'Industry Specialists',
    description:
      'Our recruiters specialize in Semiconductor, AI, and Deep Technology—ensuring deep understanding of your technical requirements.',
    icon: Cpu,
  },
  {
    title: 'Quality Talent',
    description:
      'Every candidate undergoes a rigorous technical evaluation to ensure they meet the highest engineering standards.',
    icon: ShieldCheck,
  },
  {
    title: 'Speed & Precision',
    description:
      'Our streamlined recruitment process delivers qualified candidates quickly without compromising on quality.',
    icon: Zap,
  },
  {
    title: 'Global Mindset',
    description:
      'We source talent across regions, enabling global delivery and access to the best engineering professionals worldwide.',
    icon: Globe,
  },
  {
    title: 'Flexible Engagement Models',
    description:
      'From permanent placement to contract staffing and RPO, we offer engagement models that fit your hiring needs.',
    icon: Layers,
  },
  {
    title: 'Trusted Partnerships',
    description:
      'We build long-term relationships with clients and candidates, serving as a trusted partner in talent acquisition.',
    icon: Handshake,
  },
];

export const recruitmentProcess = [
  {
    number: '01',
    title: 'Understand Your Requirements',
    description:
      'We begin by deeply understanding your technical requirements, team culture, and hiring goals to ensure precise candidate matching.',
  },
  {
    number: '02',
    title: 'Talent Sourcing',
    description:
      'Our specialized recruiters leverage an extensive engineering network and advanced sourcing strategies to identify top talent.',
  },
  {
    number: '03',
    title: 'Technical Evaluation',
    description:
      'Candidates undergo rigorous technical assessment to validate their skills, experience, and suitability for your role.',
  },
  {
    number: '04',
    title: 'Interview Coordination',
    description:
      'We manage the entire interview process, coordinating between you and candidates for a smooth and efficient experience.',
  },
  {
    number: '05',
    title: 'Offer & Onboarding Support',
    description:
      'We assist with offer negotiation and onboarding to ensure a seamless transition for your new engineering hire.',
  },
];

export const candidateProcess = [
  {
    number: '01',
    title: 'Submit Your Profile',
    description:
      'Share your resume and career preferences through our candidate portal or contact form.',
  },
  {
    number: '02',
    title: 'Profile Review',
    description:
      'Our specialized recruiters review your profile to understand your skills, experience, and career aspirations.',
  },
  {
    number: '03',
    title: 'Connect with Our Recruiters',
    description:
      'We reach out to discuss relevant opportunities that match your technical expertise and career goals.',
  },
  {
    number: '04',
    title: 'Interview Support',
    description:
      'We coordinate interviews and provide guidance throughout the process to help you present your best.',
  },
  {
    number: '05',
    title: 'Offer & Onboarding',
    description:
      'We support you through offer negotiation and onboarding for a smooth transition into your new role.',
  },
];

export const coreValues = [
  {
    title: 'Excellence',
    description:
      'We pursue the highest standards in everything we do, from candidate evaluation to client service.',
    icon: Sparkles,
  },
  {
    title: 'Integrity',
    description:
      'We operate with transparency, honesty, and ethical practices in every interaction.',
    icon: ShieldCheck,
  },
  {
    title: 'Innovation',
    description:
      'We embrace new approaches and technologies to deliver better talent solutions.',
    icon: Brain,
  },
  {
    title: 'Partnership',
    description:
      'We build lasting relationships based on trust, collaboration, and mutual success.',
    icon: Handshake,
  },
  {
    title: 'Commitment',
    description:
      'We are dedicated to the success of our clients, candidates, and the broader technology community.',
    icon: Target,
  },
];

export const semiconductorExpertise = [
  {
    title: 'Chip Design',
    items: ['SoC Design', 'ASIC Design', 'Custom IC Design', 'RTL Design', 'Microprocessor Design', 'IP Development'],
    icon: Cpu,
  },
  {
    title: 'Front-End Engineering',
    items: ['RTL Design', 'Logic Design', 'Design Verification', 'SystemVerilog', 'UVM Verification', 'Functional Verification'],
    icon: CircuitBoard,
  },
  {
    title: 'Back-End Engineering',
    items: ['Physical Design', 'Floor Planning', 'Place & Route', 'CTS', 'Timing Closure', 'Power Analysis', 'Signal Integrity'],
    icon: Layers,
  },
  {
    title: 'Design for Test (DFT)',
    items: ['Scan Insertion', 'ATPG', 'MBIST', 'LBIST', 'Boundary Scan', 'Compression Techniques'],
    icon: ShieldCheck,
  },
  {
    title: 'Analog & Mixed Signal',
    items: ['Analog IC Design', 'Mixed Signal Design', 'Power Management IC', 'PLL', 'SerDes', 'RF Design'],
    icon: Network,
  },
  {
    title: 'FPGA & Embedded',
    items: ['FPGA Design', 'Embedded Software', 'Firmware Development', 'Device Drivers', 'Board Support Package', 'Real-Time Operating Systems'],
    icon: CircuitBoard,
  },
  {
    title: 'Silicon Validation',
    items: ['Post Silicon Validation', 'Silicon Bring-up', 'Hardware Debugging', 'Failure Analysis', 'Lab Validation'],
    icon: Microscope,
  },
  {
    title: 'Semiconductor Manufacturing',
    items: ['Wafer Fabrication', 'Process Engineering', 'Packaging', 'Assembly', 'Testing', 'Yield Engineering', 'Quality Engineering'],
    icon: Cpu,
  },
];

export const semiconductorTechnologies = [
  'VLSI', 'ASIC', 'SoC', 'FPGA', 'Embedded Systems', 'AI Hardware',
  'RISC-V', 'ARM Architecture', 'PCIe', 'DDR', 'USB', 'Ethernet',
  'MIPI', 'UVM', 'Verilog', 'SystemVerilog', 'VHDL', 'Python', 'C', 'C++',
];

export const semiconductorIndustries = [
  'Semiconductor',
  'Consumer Electronics',
  'Data Centers',
  'AI Hardware',
  'IoT',
];

export const semiconductorRoles = [
  'ASIC Design Engineer', 'RTL Design Engineer', 'Physical Design Engineer',
  'DFT Engineer', 'Verification Engineer', 'FPGA Engineer',
  'Embedded Engineer', 'Firmware Engineer', 'Analog Design Engineer',
  'Layout Engineer', 'STA Engineer', 'Validation Engineer',
  'Silicon Bring-up Engineer', 'Packaging Engineer', 'Process Engineer',
  'Test Engineer', 'Product Engineer', 'CAD Engineer',
  'Applications Engineer', 'Engineering Manager', 'Principal Engineer',
  'Staff Engineer', 'Architect',
];

export const semiconductorWhyZenpiya = [
  { title: 'Specialized Semiconductor Recruiters', icon: Cpu, description: 'Recruiters with deep semiconductor industry knowledge.' },
  { title: 'Deep Technical Understanding', icon: Brain, description: 'We understand the nuances of chip design, verification, and manufacturing roles.' },
  { title: 'Global Delivery Capability', icon: Globe, description: 'Source semiconductor talent across global technology hubs.' },
  { title: 'Fast Hiring Process', icon: Zap, description: 'Accelerated recruitment for time-critical semiconductor projects.' },
  { title: 'Extensive Engineering Network', icon: Network, description: 'Access to a vast network of semiconductor engineering professionals.' },
  { title: 'Quality Technical Screening', icon: ShieldCheck, description: 'Rigorous technical evaluation of every semiconductor candidate.' },
];

export const semiconductorHiringSolutions = [
  { title: 'Permanent Hiring', icon: Users },
  { title: 'Contract Staffing', icon: Clock },
  { title: 'Contract-to-Hire', icon: GitBranch },
  { title: 'Executive Search', icon: Search },
  { title: 'Project Hiring', icon: Layers },
];

export type AIExpertiseArea = {
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
};

export const aiExpertise: AIExpertiseArea[] = [
  {
    title: 'Generative AI',
    description: 'LLM development, fine-tuning, RAG systems, prompt engineering, and generative model deployment.',
    technologies: ['GPT', 'LLaMA', 'RAG', 'Fine-tuning', 'Prompt Engineering'],
    icon: Sparkles,
  },
  {
    title: 'Machine Learning',
    description: 'Supervised and unsupervised learning, model training, feature engineering, and ML pipeline development.',
    technologies: ['Scikit-learn', 'XGBoost', 'CatBoost', 'Model Training', 'Feature Engineering'],
    icon: Brain,
  },
  {
    title: 'Deep Learning',
    description: 'Neural network architecture, model optimization, and large-scale deep learning system design.',
    technologies: ['PyTorch', 'TensorFlow', 'Keras', 'JAX', 'Neural Networks'],
    icon: Network,
  },
  {
    title: 'Computer Vision',
    description: 'Image processing, object detection, segmentation, and visual AI system development.',
    technologies: ['OpenCV', 'YOLO', 'CNN', 'Image Segmentation', 'Object Detection'],
    icon: Microscope,
  },
  {
    title: 'NLP',
    description: 'Text processing, language models, sentiment analysis, and natural language understanding systems.',
    technologies: ['Transformers', 'BERT', 'Tokenization', 'NER', 'Text Classification'],
    icon: FileCheck,
  },
  {
    title: 'AI Data Engineering',
    description: 'Data pipeline architecture, ETL for AI, data quality, and large-scale data infrastructure.',
    technologies: ['Spark', 'Kafka', 'Airflow', 'ETL', 'Data Lakes'],
    icon: Database,
  },
  {
    title: 'MLOps',
    description: 'Model deployment, monitoring, CI/CD for ML, and production machine learning operations.',
    technologies: ['MLflow', 'Kubeflow', 'CI/CD', 'Model Registry', 'Monitoring'],
    icon: Workflow,
  },
  {
    title: 'AI Infrastructure',
    description: 'GPU clusters, distributed training, high-performance computing, and AI platform engineering.',
    technologies: ['GPU', 'CUDA', 'Distributed Training', 'Ray', 'Kubernetes'],
    icon: Cloud,
  },
  {
    title: 'Robotics & Autonomous Systems',
    description: 'Robotics software, autonomous vehicles, perception systems, and real-time control systems.',
    technologies: ['ROS', 'SLAM', 'Autonomous Driving', 'Sensor Fusion', 'Motion Planning'],
    icon: Bot,
  },
  {
    title: 'AI Security',
    description: 'AI model security, adversarial defense, data privacy, and secure AI deployment practices.',
    technologies: ['Model Security', 'Adversarial Defense', 'Privacy', 'Encryption', 'Audit'],
    icon: Lock,
  },
  {
    title: 'AI Cloud',
    description: 'Cloud-native AI, serverless ML, multi-cloud AI deployment, and cloud AI platform optimization.',
    technologies: ['AWS SageMaker', 'Azure ML', 'GCP Vertex AI', 'Serverless', 'Multi-Cloud'],
    icon: Cloud,
  },
];

export const aiTechnologies = {
  frameworks: ['PyTorch', 'TensorFlow', 'Keras', 'JAX', 'Scikit-learn', 'XGBoost', 'CatBoost'],
  llmFrameworks: ['LangChain', 'LangGraph', 'LlamaIndex', 'CrewAI', 'AutoGen', 'Semantic Kernel', 'Haystack'],
  programming: ['Python', 'C++', 'Java', 'Scala', 'Go', 'Rust', 'Julia', 'R'],
  vectorDatabases: ['Pinecone', 'Weaviate', 'Milvus', 'Chroma', 'FAISS', 'Qdrant'],
  cloud: ['AWS', 'Azure', 'Google Cloud', 'Oracle Cloud', 'IBM Cloud'],
  devops: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible'],
};

export const aiRoles = [
  'Chief AI Officer', 'VP of AI', 'Director of AI',
  'AI Architect', 'AI Solutions Architect', 'Machine Learning Engineer',
  'Deep Learning Engineer', 'Generative AI Engineer', 'LLM Engineer',
  'AI Research Scientist', 'AI Software Engineer', 'Computer Vision Engineer',
  'NLP Engineer', 'AI Platform Engineer', 'AI Infrastructure Engineer',
  'MLOps Engineer', 'Data Scientist', 'Data Engineer',
  'Prompt Engineer', 'AI Agent Developer', 'RAG Engineer',
  'AI Automation Engineer', 'AI Security Engineer', 'Robotics Engineer',
  'Edge AI Engineer', 'AI Cloud Engineer', 'AI Product Manager',
  'AI Consultant', 'AI Trainer', 'AI QA Engineer', 'AI DevOps Engineer',
];

export const aiIndustries = [
  'Banking', 'Healthcare', 'Pharmaceutical', 'Automotive',
  'Aerospace', 'Manufacturing', 'Retail', 'E-Commerce',
  'Telecommunications', 'Semiconductor', 'Energy', 'Government',
  'Insurance', 'Logistics', 'Media', 'Gaming',
  'Education', 'Cybersecurity', 'Smart Cities',
];

export const aiHiringSolutions = [
  { title: 'Permanent Hiring', icon: Users },
  { title: 'Contract Staffing', icon: Clock },
  { title: 'Contract-to-Hire', icon: GitBranch },
  { title: 'Global Payroll', icon: Globe },
  { title: 'Employer of Record (EOR)', icon: ShieldCheck },
  { title: 'Offshore Development Center (ODC)', icon: Network },
  { title: 'Managed AI Teams', icon: Layers },
  { title: 'Executive Search', icon: Search },
  { title: 'Project-Based Hiring', icon: Workflow },
  { title: 'Dedicated AI Pods', icon: Cpu },
];

export const aiWhyZenpiya = [
  { title: 'Specialized AI Recruiters', icon: Brain, description: 'Recruiters who understand AI roles, technologies, and career paths.' },
  { title: 'Global AI Talent Network', icon: Globe, description: 'Access to a worldwide network of AI engineering professionals.' },
  { title: 'Pre-Screened AI Engineers', icon: ShieldCheck, description: 'Every candidate is technically evaluated before presentation.' },
  { title: 'Worldwide Deployment', icon: Network, description: 'Deploy AI talent across regions with global delivery capability.' },
  { title: 'Employer of Record (EOR)', icon: FileCheck, description: 'Hire globally without setting up local entities through our EOR service.' },
  { title: 'Fast Hiring Process', icon: Zap, description: 'Accelerated recruitment for competitive AI talent markets.' },
  { title: 'AI Technical Assessment', icon: Microscope, description: 'Rigorous technical evaluation tailored to AI engineering roles.' },
  { title: '24×7 Global Delivery', icon: Clock, description: 'Round-the-clock recruitment operations across global time zones.' },
  { title: 'Flexible Engagement Models', icon: Layers, description: 'From contract to permanent to managed teams, we adapt to your needs.' },
  { title: 'Payroll & Compliance Management', icon: Handshake, description: 'Full payroll and compliance management for global AI teams.' },
];

export const employersWhyPartner = [
  { title: 'Specialized Technology Expertise', description: 'Deep understanding of Semiconductor, AI, and Deep Technology roles.', icon: Cpu },
  { title: 'Quality-Driven Recruitment', description: 'Rigorous technical evaluation ensures only the best candidates are presented.', icon: ShieldCheck },
  { title: 'Faster Hiring', description: 'Streamlined processes reduce time-to-hire without compromising quality.', icon: Zap },
  { title: 'Tailored Talent Solutions', description: 'Customized recruitment strategies aligned with your engineering goals.', icon: Target },
  { title: 'Global Talent Access', description: 'International network giving you access to engineering talent worldwide.', icon: Globe },
  { title: 'Flexible Engagement Models', description: 'Permanent, contract, RPO, and project-based hiring options.', icon: Layers },
];

export const candidatesWhyChoose = [
  { title: 'Specialized Opportunities', description: 'Access to roles matched to your specific technical expertise in Semiconductor and AI.', icon: Target },
  { title: 'Career Growth', description: 'Opportunities with innovative companies driving the future of technology.', icon: Sparkles },
  { title: 'Expert Guidance', description: 'Recruiters who understand your skills and career aspirations in depth.', icon: Brain },
  { title: 'Global Opportunities', description: 'Access to positions across global technology hubs and organizations.', icon: Globe },
  { title: 'Confidential Process', description: 'Your profile is handled with professionalism and confidentiality.', icon: ShieldCheck },
  { title: 'Interview Support', description: 'Guidance and coordination throughout the interview process.', icon: Handshake },
];

export const candidateTips = [
  { title: 'Highlight Technical Depth', description: 'Showcase specific technologies, tools, and projects that demonstrate your engineering expertise.' },
  { title: 'Be Clear About Your Goals', description: 'Communicate your career aspirations, preferred roles, and target industries clearly.' },
  { title: 'Keep Your Profile Updated', description: 'Ensure your resume reflects your latest skills, certifications, and project experience.' },
  { title: 'Prepare for Technical Interviews', description: 'Review core concepts and be ready to discuss your problem-solving approach in depth.' },
];
