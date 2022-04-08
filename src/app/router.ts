import { createRouter, RouteRecordRaw, RouterHistory } from 'vue-router'
import Notes from './pages/notes.vue'
import Project from './pages/project.vue'
import Resume from './pages/resume.vue'
import Posts from './pages/posts.vue'
import { camlize } from './utils/strings'

const finder = (part: Record<string, any>) => {
  return Object.keys(part).map((mod) => {
    const r = part[mod]
    const name = camlize(r.meta[0].name)
    return {
      path: r.meta[0].name,
      component: part[mod].default,
      name,
      meta: {
        title: r.title,
        date: r.meta[0].date
      }
    }
  })
}

export const notes = finder(import.meta.globEager('../../posts/notes/*.md'))

export enum RouteName {
  Note = 'note',
  Notes = 'notes',
  Project = 'project',
  Resume = 'resume'
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteName.Note,
    component: Notes
  },
  {
    path: '/project',
    name: RouteName.Project,
    component: Project
  },
  {
    path: '/resume',
    name: RouteName.Resume,
    component: Resume
  },
  {
    path: '/notes',
    component: Posts,
    children: [...notes]
  }
]

export interface RouterCreateorOptions {
  history: RouterHistory
}

export const createUniveralRouter = (options: RouterCreateorOptions) => {
  const router = createRouter({
    routes,
    history: options.history
  })

  return router
}