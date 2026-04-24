// Core data types shared across the application

/** Bilingual string — all user-visible content carries both locales. */
export type L = { ru: string; en: string }

/** A single coding parameter in simple mode. */
export interface SimpleItem {
  id: string
  label: L
  /** English BimmerCode parameter name shown as the badge (language-neutral). */
  desc: string
  info: L
}

export interface Category {
  id: string
  title: L
  icon: string
  items: SimpleItem[]
}

/** A single selectable value in an enum-style expert step. */
export interface ExpertOption {
  value: string
  label: L
}

/** One parameter change within an expert procedure. */
export interface ExpertStep {
  param: string
  /** Target value for regular (non-enum) steps. */
  value?: string
  desc?: L
  /** Present when the parameter accepts a fixed set of values. */
  options?: ExpertOption[]
}

/** A multi-step expert coding procedure for a single feature. */
export interface ExpertItem {
  id: string
  /** ECU block name, e.g. "BDC", "MGU". */
  block: string
  /** Display category used for the chip filter. */
  category: L
  title: L
  steps: ExpertStep[]
  /** Optional warning or tip shown below the steps. */
  note?: L
}

/** SimpleItem enriched with its parent category reference, used in the plan store. */
export interface SelectedSimpleItem extends SimpleItem {
  category: Pick<Category, 'id' | 'title' | 'icon'>
}

/** A category group used when rendering the plan dialog. */
export interface PlanCategory {
  id: string
  title: L
  icon: string
  items: SelectedSimpleItem[]
}
