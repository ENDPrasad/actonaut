"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Tabs, Tab, Box } from "@mui/material"
import type { TabItem } from "../../interfaces/interfaces"
import { PRIMARY_COLOR } from "../../helper/contants"

interface TabNavigationProps {
  tabs: TabItem[]
  defaultActiveTab?: string
  onTabChange?: (tabId: string) => void
}

export function TabNavigation({ tabs, defaultActiveTab, onTabChange }: TabNavigationProps) {
  // ✅ Set initial active tab from hash or fallback to default
  const getInitialTab = () => {
    const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : ""
    return hash || defaultActiveTab || tabs[0]?.id
  }

  const [activeTab, setActiveTab] = useState(getInitialTab)

  // ✅ Sync hash with tab state when tab changes
  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue)
    window.location.hash = newValue // updates the URL with #tabId
    onTabChange?.(newValue)
    window.scrollTo(0, 0)
  }

  // ✅ When user navigates directly to a URL with #tabId
  useEffect(() => {
    const onHashChange = () => {
      const tabId = window.location.hash.replace("#", "")
      if (tabId && tabId !== activeTab && tabs.some(tab => tab.id === tabId)) {
        setActiveTab(tabId)
        onTabChange?.(tabId)
      }
    }

    // Initial check on mount
    onHashChange()

    // Listen for hash changes
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [activeTab, tabs, onTabChange])

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content

  return (
    <div className="w-full mt-8">
      {/* Tab Headers */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 500,
              fontSize: "0.875rem",
              minHeight: "48px",
              "&.Mui-selected": {
                color: PRIMARY_COLOR,
                backgroundColor: "#eef2ff",
              },
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#1b247e",
              height: "2px",
            },
          }}
        >
          {tabs.map((tab) => (
            <Tab key={tab.id} label={tab.label} value={tab.id} className="px-4 py-2" />
          ))}
        </Tabs>
      </Box>

      {/* Tab Content */}
      <Box className="tab-content">{activeTabContent}</Box>
    </div>
  )
}
