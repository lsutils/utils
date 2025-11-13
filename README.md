# utils


http 零宕机
https://github.com/fvbock/endless




```
objList := &unstructured.UnstructuredList{}
objList.SetAPIVersion(gvk.GroupVersion().String())
objList.SetKind(gvk.Kind)
if err := c.List(context.TODO(), objList, client.InNamespace(v1.NamespaceAll)); err != nil {
    return fmt.Errorf("failed to list CRs of %v: %v", gvk, err)
}
```