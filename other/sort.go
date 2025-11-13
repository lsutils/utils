package other

import (
	"fmt"
	"sort"

	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type Sorter[T metav1.Object] struct {
	l []T
	F func(i, j int, objs []T) bool
}

func (s Sorter[T]) Len() int {
	return len(s.l)
}

func (s Sorter[T]) Less(i, j int) bool {
	return s.F(i, j, s.l)
}

func (s Sorter[T]) Swap(i, j int) {
	s.l[i], s.l[j] = s.l[j], s.l[i]
}

func F() {
	as := []*corev1.Pod{
		{
			ObjectMeta: metav1.ObjectMeta{
				Name: "interview",
			},
		},
		{
			ObjectMeta: metav1.ObjectMeta{
				Name: "a2",
			},
		},
		{
			ObjectMeta: metav1.ObjectMeta{
				Name: "a1",
			},
		},
	}
	sort.Sort(Sorter[*corev1.Pod]{as, func(i, j int, objs []*corev1.Pod) bool {
		return true
	}})
	sort.Sort(Sorter[*corev1.Pod]{as, nil})
	fmt.Println(as)
}
