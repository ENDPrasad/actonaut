"use client"

import { useParams } from "react-router-dom"
import { ChallengePageLayout } from "./ChallengePageLayout"
import { createChallengePageData } from "./ChallengeDataFactory"
import { getChallengeById } from "../../assets/data/ChallengesData"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import NotFound from "../../pages/NotFound"

export function ChallengeDetailPage() {
  const { challengeId } = useParams<{ challengeId: string }>()

  if (!challengeId) {
    return (
      <NotFound />
    )
  }

  const challengeContent = getChallengeById(challengeId)

  if (!challengeContent) {
    return (
      <NotFound />
    )
  }

  const pageData = createChallengePageData(challengeContent)

  return <>
  <NavBar />
  <ChallengePageLayout data={pageData} />
  <Footer />
  </>
}
