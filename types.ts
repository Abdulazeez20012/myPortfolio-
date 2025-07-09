
export interface NavLink {
  id: string;
  title: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  video_snippet_url?: string;
  source_code_link: string;
  live_demo_link?: string;
}