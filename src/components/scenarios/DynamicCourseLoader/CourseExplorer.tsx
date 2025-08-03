import { useEffect, useRef, useState, useContext, createContext } from 'react';
import { Card, CardContent, Typography, Box, CircularProgress } from '@mui/material';

// Sample course data context
const CourseContext = createContext<{ id: number; title: string; description: string }[]>([]);

const useCourseContext = () => useContext(CourseContext);

const coursesData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Course ${i + 1}`,
  description: `This is the description of course ${i + 1}. It includes detailed modules and concepts.`,
}));

const CourseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <CourseContext.Provider value={coursesData}>{children}</CourseContext.Provider>;
};

const CourseCard: React.FC<{
  course: { id: number; title: string; description: string };
  onClick: () => void;
  selected: boolean;
}> = ({ course, onClick, selected }) => (
  <Card
    onClick={onClick}
    className={`mb-4 cursor-pointer transition-all ${
      selected ? 'border-2 border-blue-500' : 'hover:shadow-md'
    }`}
  >
    <CardContent>
      <Typography variant="h6">{course.title}</Typography>
    </CardContent>
  </Card>
);

const CoursePreview: React.FC<{ course: { title: string; description: string } | null }> = ({ course }) => (
  <Box className="p-4 border-l border-gray-300 min-h-[300px]">
    {course ? (
      <>
        <Typography variant="h5" className="mb-2">
          {course.title}
        </Typography>
        <Typography variant="body1">{course.description}</Typography>
      </>
    ) : (
      <Typography variant="body1">Select a course to preview its content</Typography>
    )}
  </Box>
);

const LazyCourseList: React.FC = () => {
  const courses = useCourseContext();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleCourses, setVisibleCourses] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<{ id: number; title: string; description: string } | null>(null);

  const loadMoreCourses = () => {
    if (loading || visibleCourses >= courses.length) return;
    setLoading(true);
    setTimeout(() => {
      setVisibleCourses((prev) => Math.min(prev + 10, courses.length));
      setLoading(false);
    }, 3000);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    if (container.scrollTop + container.clientHeight >= container.scrollHeight - 20) {
      loadMoreCourses();
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCourses, loading]);

  useEffect(() => {
    loadMoreCourses();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className="flex border rounded-xl overflow-hidden shadow-md">
      <Box
        className="w-1/2 max-h-[600px] overflow-y-auto p-4 bg-gray-50"
        ref={containerRef}
      >
        {courses.slice(0, visibleCourses).map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            selected={selectedCourse?.id === course.id}
            onClick={() => setSelectedCourse(course)}
          />
        ))}
        {loading && (
          <Box className="flex justify-center p-4">
            <CircularProgress size={24} />
          </Box>
        )}
      </Box>
      <Box className="w-1/2">
        <CoursePreview course={selectedCourse} />
      </Box>
    </Box>
  );
};

export default function CourseExplorer(){
    return <CourseProvider>
    <LazyCourseList />
  </CourseProvider>
}


