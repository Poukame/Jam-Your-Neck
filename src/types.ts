// Props
export interface IPropsNotePerChord {stringNb: number}
export interface IPropsNeckMarker {stringNb: number, position: string}
export interface IPropsHeader {windowWidth: number}
export type WithChildren<T = {}> = T & { children?: React.ReactNode };

//Variables
export type notation = 'Sharp' | 'Flat'

export type tone = 'Minor' | 'Major'

export type rootNote = 'A' | 'A#' | 'Bb' | 'B' | 'C' | 'C#' | 'Db' | 'D' | 'D#' | 'Eb' | 'E' | 'F' | 'F#' | 'Gb' | 'G' | 'G#' | 'Ab'

export type scaleType = 'Pentatonic' | 'Diatonic'

export type calculatedOrAll = 'all' | 'calculated'

export type duplicateOrNot = 'noDuplicate' | 'allowDuplicate'

export interface notationArray {
        notation: string,
        isSelected: boolean,
}[]


